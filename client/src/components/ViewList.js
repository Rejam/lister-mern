import React from "react";
import PropTypes from "prop-types";

const ViewList = props => {
  const { list, addItem } = props;
  const { id } = props.match.params;

  const handleSubmit = e => {
    e.preventDefault();
    const { title, content } = e.target.elements;
    const newItem = {
      title: title.value,
      content: content.value
    };
    addItem(newItem, id);
    e.target.reset();
  };

  return (
    <section className="container section">
      {!list ? (
        <h2 className="title">List not found</h2>
      ) : (
        <nav className="panel">
          <p className="panel-heading">
            <span>
              <i
                className={`fas fa-${list.icon}`}
                aria-hidden="true"
                style={{ marginRight: "1rem" }}
              />
            </span>
            {list.name}
          </p>
          <div className="panel-block">
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" htmlFor="title">
                    Title
                  </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control is-expanded">
                      <input
                        id="title"
                        className="input"
                        type="text"
                        name="title"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" htmlFor="content">
                    Content
                  </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        id="content"
                        className="input"
                        type="text"
                        name="content"
                        placeholder="Content"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control" />
                    <button className="button is-primary" type="submit">
                      Add item
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {list.items.map(i => (
            <a key={i._id} className="panel-block is-block">
              <h5 className="is-size-5">{i.title}</h5>
              <div>{i.content}</div>
            </a>
          ))}
        </nav>
      )}
    </section>
  );
};

ViewList.propTypes = {
  addItem: PropTypes.func.isRequired,
  list: PropTypes.object
};

export default ViewList;
