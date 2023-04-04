export interface CommentInfoType {
  parentId: string;
  id: string;
  ancestorId: string;
  comment: string;
  likeNum: number;
  status: number;
  user: CommentUser;
  isLike: number;
  childCommentNum: number;
  childList: CommentInfoType[];
  parentNickName: string;
  parentUserId: string;
  parentPicture: string;
  parentStatus: number;
  createTime: string;
  updateTime: string;
}
export interface CommentUser {
  id: string;
  nickName: string;
  picture: string;
  status: number;
}
export enum CommentType {
  Parent,
  Child,
}
export {};
