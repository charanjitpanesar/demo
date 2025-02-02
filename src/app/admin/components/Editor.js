import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";

const EditorJS = dynamic(() => import("@editorjs/editorjs"), { ssr: false });

const useEditorJS = (holderId = "editorjs-container", onChange) => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    let editorInstance;

    const initEditor = async () => {
      if (typeof window !== "undefined") {
        // const LinkTool = (await import("@editorjs/link")).default;

        editorInstance = new EditorJS({
          holder: holderId,
          tools: {
            header: Header,
            table: Table,
            list: List,
            simpleImage: SimpleImage,
            // linkTool: LinkTool
          },
          onChange: (api, event) => {
            if (onChange) {
              editorInstance.save().then((data) => {
                onChange(data);
              });
            }
          },
        });

        setEditor(editorInstance);
      }
    };

    initEditor();

    return () => {
      if (editorInstance && editorInstance.destroy) {
        editorInstance.destroy();
      }
    };
  }, [holderId]);

  return editor;
};

export default useEditorJS;
