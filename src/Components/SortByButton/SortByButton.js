import Dropdown from 'react-bootstrap/Dropdown';

function SortByButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Posts</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Members</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortByButton;