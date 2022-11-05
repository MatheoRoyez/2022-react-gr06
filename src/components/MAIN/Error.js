const Error = ({ error }) => {
  return (
    <div className="error-pane" >
      <p className="error-title" data-cy="error_title">{error.title}</p>
      <p className="error-description" data-cy="error_description">{error.description}</p>
    </div>
  );
};

export default Error;
