export function InteractHeadline({
  content,
  type,
  theme,
  buttonInfo,
  onChangeTheme,
}) {
  return (
    <>
      <h2>{content.headline}</h2>
      <InteractHeadline.Button
        theme={theme}
        buttonInfo={buttonInfo}
        onClick={onChangeTheme}
      />
    </>
  );
}

InteractHeadline.defaultProps = {
  type: 'button',
};

/* -------------------------------------------------------------------------- */

InteractHeadline.Button = ({ buttonInfo, theme, ...restProps }) => (
  <button
    type={buttonInfo.type}
    style={{ padding: '8px 16px', marginBottom: 12 }}
    {...restProps}
  >
    {buttonInfo.content} : {theme}
  </button>
);

InteractHeadline.Button.displayName = 'InteractHeadlineButton';
