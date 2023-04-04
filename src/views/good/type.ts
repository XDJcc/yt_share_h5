import { TopicInfoType } from "@/views/article/type";
import { BaseResponseType } from "@/global/base_type/base_type";
import { CommentUser } from "@/components/type/type";

export interface GoodResponseType
  extends BaseResponseType<{
    bgc: string;
    detail: GoodDetailType;
    comments: Array<GoodCommentInfoType>;
    ph: Number;
    pd: Number;
  }> {}

export interface GoodDetailType {
  id: number;
  name: string;
  defaultImage: string;
  matchDegree: string;
  tags: TopicInfoType[];
  type: number;
  nutrientUnit: string;
  sweet: number;
  acid: number;
  images: GoodImgType[];
  sensorys: GoodSensorysType[];
  recommed: number;
  unRecommed: number;
  goodsScore: GoodsScoreType;
  commentId: string;
  alias: string;
  introduce: string;
  listingDate: string;
  expectEvaluationStatus: number;
  articleId: string;
  reviewsStatus: number;
  isSift: number;
}

export interface GoodImgType {
  img: string;
  seq: number;
}
export interface GoodSensorysFeatureListType {
  id: number;
  name: string;
  value: number;
  alias: string;
}
export interface GoodSensorysType {
  id: number;
  name: string;
  featureList: GoodSensorysFeatureListType[];
}
export interface GoodsScoreType {
  compositeScore: number;
  tasteScore: number;
  faceScore: number;
  brandScore: number;
}
export interface GoodCommentInfoType {
  parentId: string;
  imagesLength: Number;
  id: string;
  ancestorId: string;
  comment: string;
  likeNum: number;
  status: number;
  isLike: number;
  user: CommentUser;
  childCommentNum: number;
  sourceType: number;
  childList: any[];
  parentNickName: string;
  parentUserId: string;
  parentPicture: string;
  parentStatus: number;
  createTime: string;
  updateTime: string;
  images: string[];
  goodsScore: GoodsScoreType;
  refinement: number;
  evaluateTopping: number;
  exposure: number;
  articleId: string;
}
