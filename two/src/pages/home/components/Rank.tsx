import { useMemo, useState } from 'react';
import './rank.css';
import { Button, Table } from 'antd';
import { useRequest } from 'ahooks';
import { GetRankList } from '../../../api';
import { CaretUpOutlined, DownOutlined } from '@ant-design/icons';

export function Rank() {
  const [type, setType] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [pagination, setPagination] = useState<{ page: number; pageSize: number }>({
    page: 1,
    pageSize: 10
  });

  const getRankListRequest = useRequest(
    () => {
      return GetRankList.request({
        ...pagination,
        type: type
      });
    },
    {
      refreshDeps: [type, pagination],
      pollingInterval: 10 * 1000
    }
  );

  // 切换类型
  const handleSwitchType = (value: 'daily' | 'weekly' | 'monthly') => {
    setType(value);
  };

  const rankTableColumns = [
    {
      title: '当前排名',
      dataIndex: 'rank',
      key: 'rank'
    },
    {
      title: '玩家名',
      dataIndex: 'nickName',
      key: 'nickName'
    },
    {
      title: '得分',
      dataIndex: 'score',
      key: 'score'
    },
    {
      title: '排名变化',
      dataIndex: 'rankChange',
      key: 'rankChange',
      render: (value: number, item: any) => (
        <span>
          {value > 0 && (
            <>
              <CaretUpOutlined />
              {value}
            </>
          )}
          {value === 0 && <>{value}</>}
          {value < 0 && (
            <>
              <DownOutlined />
              {value}
            </>
          )}
        </span>
      )
    }
  ];

  const tablePagination = useMemo(() => {
    return {
      current: pagination.page,
      pageSize: pagination.pageSize,
      total: getRankListRequest.data?.data?.total ?? 0,
      onChange: (page: number, pageSize: number) => {
        setPagination({
          page,
          pageSize
        });
      }
    };
  }, [pagination, getRankListRequest.data]);

  return (
    <div className="text-2xl mx-auto my-16 w-[800px]">
      {/* daily select */}
      <div className="flex flex-row w-fit flex-nowrap mx-auto">
        <Button className="text-2xl" type={type === 'daily' ? 'link' : 'text'} onClick={() => handleSwitchType('daily')} size="large">
          日榜
        </Button>
        <Button className="text-2xl" type={type === 'weekly' ? 'link' : 'text'} onClick={() => handleSwitchType('weekly')} size="large">
          周榜
        </Button>
        <Button className="text-2xl" type={type === 'monthly' ? 'link' : 'text'} onClick={() => handleSwitchType('monthly')} size="large">
          月榜
        </Button>
      </div>
      {/* rank display */}
      <div className="my-10">
        <Table
          className="custom-table"
          columns={rankTableColumns}
          dataSource={getRankListRequest.data?.data?.list}
          pagination={tablePagination}
        />
      </div>
    </div>
  );
}
