import { CommentInfoType } from "@/components/type/type";
import { BaseResponseType } from "@/global/base_type/base_type";

export interface ArticleDetailsResponseType
  extends BaseResponseType<{
    pd: Number;
    ph: Number;
    detail: ArticleDetailType;
    comments: Array<CommentInfoType>;
  }> {}

export interface UserType {
  id: string;
  nickName: string;
  picture: string;
  status: number;
}

export interface GoodType {
  id: number;
  name: string;
  defaultImage: string;
  status: number;
  type: number;
  tags: any[];
}

export interface TopicInfoType {
  id: number;
  name: string;
  alias: string;
  isAward: number;
}

/*
 * 文章详情类
 * */
export interface ArticleDetailType {
  id: number;
  title: string;
  frontCover: string;
  type: number;
  content: string;
  user: UserType;
  images: Array<string>;
  reGoods: GoodType[];
  createTime: string;
  updateTime: string;
  tags: TopicInfoType[];
}
