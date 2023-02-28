import React, { useEffect, useState } from "react";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { draftToHtml } from "draftjs-to-html";
import { useLoaderData } from "react-router-dom";

export default function Note() {
  const { note } = useLoaderData();
  const [editorState, setEditorStae] = useState(() => {
    return EditorState.createEmpty();
  });
  const [rawHTML, setRawHTML] = useState(note.content);

  useEffect(() => {
    const blockFromHTML = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blockFromHTML.contentBlocks,
      blockFromHTML.entityMap
    );
    setEditorStae(EditorState.createWithContent(state));
  }, [note.id]);

  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);

  const handleOnChange = (e) => {
    setEditorStae(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleOnChange}
      placeholder="Write something!"
    />
  );
}
