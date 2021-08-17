import { useState } from "react";

export const TagsInput = (props: any) => {
  const [tags, setTags] = useState<string[]>(props.tags);
  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_: any, index: any) => index !== indexToRemove)]);
  };
  const addTags = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value], event);
      event.target.value = "";
    }
  };
  return (
    <div className="tags">
      <input
        className="input"
        type="text"
        name={props.name}
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
      />
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag is-success">
            <span className="tag-title">{tag}</span>
            <button
              className="delete is-small"
              onClick={() => removeTags(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
