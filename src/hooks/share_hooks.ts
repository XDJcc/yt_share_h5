import { Ref, ref } from "vue";

type UseArticleHooksType = (string) => [Ref<string>];

export async function UseArticleHooks(sign: string): Promise<[Ref<string>]> {
  const content = ref<string>("");
  const res = await Promise.resolve();
  return [content];
}
