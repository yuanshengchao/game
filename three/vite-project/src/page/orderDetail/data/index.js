// 按照返回的数据mock数据

export const response={
    id: "1",
    title: "工单标题1",
    content: "工单内容",
    status: "processing",
    priority: "high",
    createTime: "2021-01-01",
    deadline: "2021-01-05",
    user: {
      id: "1",
      nickname: "张三",
      registerTime: "2021-01-01",
      recentTickets: [
        {
          id: "1",
          title: "工单标题1",
          status: "processing",
        },
        {
          id: "2",
          title: "工单标题2",
          status: "completed",
        },
      ],
    },
    replies: [
      {
        id: "1",
        content: "回复内容",
        createTime: "2021-01-01",
        operator: {
          id: "1",
          name: "张三",
        },
        images: ["https://tuwaii.com/wp-content/themes/twentytwentyfour/assets/images/building-exterior.webp"],
        },
    ]

}