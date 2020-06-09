export interface ITableType {
  key: string;
  title?: string;
  dataIndex: string;
  width: number;
  defaultSortOrder?: string | null;
  sorter?: (...a: any[]) => {};
}

export const TABLE_COLUMNS: ITableType[] = [
  {
    key: "1",
    title: "Id",
    dataIndex: "id",
    width: 50,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => {
      const f = (str: string) => parseInt(str.replace(/[^\d.-]/g, ""));
      return f(a.id) - f(b.id);
    },
  },
  {
    key: "2",
    title: "Name",
    dataIndex: "name",
    width: 450,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    key: "3",
    title: "Mode",
    dataIndex: "mode",
    width: 80,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.mode.length - b.mode.length,
  },
  {
    key: "4",
    title: "Status",
    dataIndex: "status",
    width: 80,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.status.length - b.status.length,
  },
  {
    key: "5",
    title: "Total",
    dataIndex: "total",
    width: 50,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.total - b.total,
  },
  {
    key: "6",
    title: "Type",
    dataIndex: "type",
    width: 80,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.type.length - b.type.length,
  },
  {
    key: "7",
    title: "UserId",
    dataIndex: "userId",
    width: 50,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => {
      const f = (str: string) => parseInt(str.replace(/[^\d.-]/g, ""));
      return f(a.userId) - f(b.userId);
    },
  },
  {
    key: "8",
    dataIndex: "details",
    width: 150,
  },
];
