import React, { useState, useEffect } from "react";
import { FilePond, registerPlugin  } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginImagePreview);

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Page</p>
      <ul class="list-disc list-inside">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>

      <ul role="list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>

      <hr />
      <button>button</button>

      <hr />
      {/* <iframe class="w-full aspect-video hover:aspect-square" title="xx" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe> */}

      <hr />
      <div className="w-full bg-pink-50 aspect-[4/3]"></div>

      <hr />
      <div className="w-20 h-20 bg-purple-50 mx-auto px-4"></div>

      <hr />
      <div className="grid colums-3 gap-8">
        {/* <div className="w-full h-10 aspect-video bg-pink-50"></div>
        <div className="w-full h-10 aspect-video bg-pink-50"></div>
        <div className="w-full h-10 aspect-video bg-pink-50"></div>
        <div className="w-full h-10 aspect-video bg-pink-50"></div>
        <div className="w-full h-10 aspect-video bg-pink-50"></div> */}

        <img className="w-full aspect-video" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80" alt="" />
      
        <img className="w-full aspect-video" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80" alt="" />
        <img className="w-full aspect-video" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80" alt="" />
        <img className="w-full aspect-video" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80" alt="" />

      </div>


        <hr />
      <FilePond allowMultiple={true}/>
    </div>
  );
};

export default Page;
