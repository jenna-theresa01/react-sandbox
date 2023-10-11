// MyButton
// export default function MyButton({clickHandler, buttonText})
function MyButton({clickHandler, buttonText}) {
    return (
      <button onClick={clickHandler} >{buttonText}</button>
    );
  }

  export default MyButton;