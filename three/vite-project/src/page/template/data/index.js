// 自动mock数据30条
const listData = Array.from({ length: 30 }).map((item, index) => ({
  id: String(index + 1),
  title: `工单标题${index + 1}`,
  content: `工单内容${index + 1}`,
  useCount: index + 1,
}));

export const templateData = {
  total: 30,
  list: listData,
};
