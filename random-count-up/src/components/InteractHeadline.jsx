export function InteractHeadline({ content, type }) {
  return (
    <>
      <h2>{content.headline}</h2>
    </>
  );
}

InteractHeadline.defaultProps = {
  type: 'button',
};
