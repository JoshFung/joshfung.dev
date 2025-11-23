
interface LinkItem {
  text: string;
  clickHandler: () => void;
}

function Subheadings() {
  const handleEmailClick = () => {
    console.log("Email clicked");
    window.location.href = "mailto:joshuagyfung@gmail.com";
  };

  const handleGithubClick = () => {
    console.log("GitHub clicked");
    window.open("https://github.com/JoshFung", "_blank");
  };

  const handleResumeClick = () => {
    console.log("Resume clicked");
    window.open("/JoshuaFungResume.pdf", "_blank");
  };

  const handleLinkedInClick = () => {
    console.log("LinkedIn clicked");
    window.open("https://linkedin.com/in/joshfung/", "_blank");
  };

  const links: LinkItem[] = [
    { text: "Email", clickHandler: handleEmailClick },
    { text: "GitHub", clickHandler: handleGithubClick },
    { text: "Resume", clickHandler: handleResumeClick },
    { text: "LinkedIn", clickHandler: handleLinkedInClick },
  ];

  return (
    <div className="flex flex-row justify-between">
      {links.map((item: LinkItem) => (
        <button
          key={item.text}
          onClick={item.clickHandler}
          className="text-isabelline font-jakarta font-regular text-2xs sm:text-2xl"
        >
          {item.text}
        </button>
      ))}
    </div>
  )
}

export default Subheadings;
