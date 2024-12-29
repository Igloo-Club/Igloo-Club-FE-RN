export const MOCK_CHATROOM = {
  nickname: '버팔로',
  imageUrl:
    'https://nungil-s3bucket.s3.ap-northeast-2.amazonaws.com/0574bdf1-9fa1-4983-8912-39be30192793.png?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241226T082612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=AKIAXYKJRCOQ2QJ3DRX6%2F20241226%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=77120f2120a5f1af5e527c510dabbc2be0ff2d8b2cbf4e372cfe5a922f75e65a',
  chatRoomId: 3,
  ownMemberId: 4,
  isInactive: false,
  messageSlice: {
    content: [
      {
        id: 27,
        nickname: '버팔로',
        content: '아아아아아아아아ㅏ',
        createdAt: '2024-10-31T22:41:30.474368',
        isAuthor: false,
        status: 'READ',
      },
      {
        id: 28,
        nickname: '버팔로',
        content: '아아아아',
        createdAt: '2024-10-31T22:41:33.392421',
        isAuthor: false,
        status: 'READ',
      },
      {
        id: 29,
        nickname: '버팔로',
        content: '아아아앙',
        createdAt: '2024-10-31T22:41:46.149329',
        isAuthor: false,
        status: 'UNREAD',
      },
      {
        id: 30,
        nickname: '버팔로',
        content: '아아안녕하세요',
        createdAt: '2024-10-31T22:42:29.796653',
        isAuthor: false,
        status: 'UNREAD',
      },
    ],
    pageable: {
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 4,
      paged: true,
      unpaged: false,
    },
    size: 4,
    number: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    numberOfElements: 4,
    first: true,
    last: false,
    empty: false,
  },
};

export type chatRoomType = typeof MOCK_CHATROOM;