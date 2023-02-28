export default {
  authors: [
    {
      id: 123,
      name: "ThanhTu",
    },
    {
      id: 999,
      name: "ThienToan",
    },
  ],
  folders: [
    {
      id: "1",
      name: "Home",
      createAt: "2022-11-18T03:42:13Z",
      authorId: 123,
    },
    {
      id: "2",
      name: "New Folder",
      createAt: "2022-10-18T03:42:13Z",
      authorId: 999,
    },
    {
      id: "3",
      name: "Work",
      createAt: "2022-9-18T03:42:13Z",
      authorId: 123,
    },
  ],
  notes: [
    {
      id: "123",
      content: "<p>Go to supermarket</p>",
      folderId: "1",
    },
    {
      id: "234",
      content: "<p>Go to park</p>",
      folderId: "1",
    },
    {
      id: "123",
      content: "<p>Go to school</p>",
      folderId: "2",
    },
  ],
};
