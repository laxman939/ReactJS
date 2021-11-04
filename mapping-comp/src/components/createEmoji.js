import React from "react";
import Entry from "./Entry";

//Takes each element of array and displays singel element(object) properties
function CreateEmoji(singleEmoji) {
  return (
    <Entry
      key={singleEmoji.id}
      emoji={singleEmoji.emoji}
      name={singleEmoji.name}
      mean={singleEmoji.meaning}
    />
  );
}
export default CreateEmoji;
//App--CreateEmoji--Entry--singleEmoji(single term from emojipedia)
