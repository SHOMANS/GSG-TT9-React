export const POSTS_COLUMNS = (handleDelete, handleEdit) => [
  {
    key: 'id',
    title: 'Id',
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'body',
    title: 'Body',
  },
  {
    // key: 'user.id'
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <>
        <button onClick={() => handleDelete(data.id)}>delete</button>
        <button onClick={() => handleEdit(data.id)}>edit</button>
      </>
    ),
  },
];
