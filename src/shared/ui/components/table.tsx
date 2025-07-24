import React from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export const Table = <TData,>({
  data,
  columns,
}: {
  data: TData[];
  columns: ColumnDef<TData>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-scroll rounded-lg bg-white/40 p-6">
      <table className="w-full table-fixed border-collapse">
        <thead className="text-left">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data.length ? (
          <tbody className="border border-black">
            {table.getRowModel().rows.map((row, rowIndex) => (
              <React.Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="p-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
                {rowIndex < table.getRowModel().rows.length - 1 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="border-b border-black/30"
                    />
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};
