import axios from "axios";
import React, { useState } from "react";

import Modal from "./Modal";
function MusicTable({ music, setMusic }) {
  function LikeAndDisLike(action, id) {
    axios
      .post("http://localhost:8000/api/songs/action/", {
        song_id: id,
        action: action,
      })
      .then((response) => {
        const updatedMusic = music.map((item) => {
          if (item.id === id) {
            if (action === "like") {
              return { ...item, like: item.like + 1 };
            } else if (action === "dislike") {
              return { ...item, like: item.like - 1 };
            }
          }
          return item;
        });

        setMusic(updatedMusic);
      });
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleTableRowClick = () => {
    setIsModalOpen(true);
  };

  function DeleteSong(id) {
    axios.delete(`http://localhost:8000/api/songs/${id}/`).then((response) => {
      setMusic(music.filter((item) => item.id !== id));
      console.log("Music deleted successfully!");
    });
  }

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              artist
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              album
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              release_date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              genre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              like
            </th>{" "}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {music.map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.artist}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.album}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.release_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.genre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.like}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-400 hover:text-gray-500"
                    onClick={() => LikeAndDisLike("like", item.id)}
                  >
                    Like
                  </button>
                  <button
                    className="px-5 text-red-400 hover:text-gray-500"
                    onClick={() => LikeAndDisLike("dislike", item.id)}
                  >
                    Dislike
                  </button>

                  <button
                    className="px-5 text-red-400 hover:text-gray-500"
                    onClick={() => handleTableRowClick()}
                  >
                    Edit
                  </button>
                  <button
                    className="px-5 text-blue-400 hover:text-gray-500"
                    onClick={() => DeleteSong(item.id)}
                  >
                    Delete
                  </button>

                  {isModalOpen && (
                    <Modal
                      setIsModalOpen={setIsModalOpen}
                      isModalOpen={isModalOpen}
                      item={item}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MusicTable;
