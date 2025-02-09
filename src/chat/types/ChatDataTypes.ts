export interface ChatDataTypes {
  nickname: string;
  imageUrl: string; // 상대방 이미지 Presigned URL
  chatRoomId: number;
  ownMemberId: number; // 자기자신의 ID. 웹소켓으로 수신한 메시지가 어느 사용자의 것인지 구분하기 위해 사용
  isInactive: boolean; // 상대방이 나간 채팅방인지 여부
  messageSlice: {
    content: ChatMessageResponse[];
    pageable: Pageable;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
}

export interface ChatMessageResponse {
  id: number;
  nickname: string;
  content: string;
  createdAt: string;
  isAuthor: boolean;
  status: 'READ' | 'UNREAD' | 'DELETED' | 'ALL_READ';
}

export interface Pageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
