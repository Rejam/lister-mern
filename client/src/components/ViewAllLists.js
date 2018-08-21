import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteList } from "../actions/list_actions";

const ViewAllLists = ({ byId, allIds, createList, deleteList }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { title } = e.target.elements;

    if (title.value.trim().length > 0) {
      createList({ title: title.value });
    }
  };

  return (
    <section className="container section">
      <nav className="panel">
        <p className="panel-heading">Lists</p>
        <div className="panel-block section">
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  name="title"
                  type="text"
                  placeholder="New list name"
                />
              </div>
              <div className="control">
                <button className="button is-primary" type="submit">
                  Create list
                </button>
              </div>
            </div>
          </form>
        </div>
        {allIds.map(id => (
          <div key={id} className="panel-block">
            <span className="panel-icon">
              <i className={`fas fa-${byId[id].icon}`} aria-hidden="true" />
            </span>
            <Link
              to={`/lists/${id}`}
              style={{
                padding: "1rem",
                flex: "1",
                color: "#333"
              }}
            >
              <div>{byId[id].title}</div>
            </Link>
            <button
              style={{}}
              className="button is-danger is-outlined"
              onClick={() => deleteList(id)}
            >
              &times;
            </button>
          </div>
        ))}
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    </section>
  );
};

ViewAllLists.propTypes = {
  byId: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      items: PropTypes.array.isRequired
    }).isRequired
  ).isRequired,
  allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  createList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired
};

ViewAllLists.defaultProps = {
  byId: {},
  allIds: [],
  isFetching: false
};
export default ViewAllLists;
