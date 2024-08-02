
// Create type with TypeScript
type HeaderTypes = {
    title?: string;
    subTitle?: string;
  }

function Header({title , subTitle}: HeaderTypes) {

return (
        <>
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      </>
    )

  }

export default Header;