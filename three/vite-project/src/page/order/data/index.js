// 自动mock数据30条
const listData = Array.from({ length: 30 }).map((item, index) => ({
  id: String(index+1),
  title: `工单标题${index + 1}`,
  status: ["pending", "processing", "completed"][index %3],
  priority: ["high", "medium", "low"][index % 3],
  createTime: "2021-01-01",
  deadline: "2021-01-05",
  user: {
    id: "1",
    nickname: "张三",
  },
}));

export const orderData={
    total:30,
    list:listData
}
