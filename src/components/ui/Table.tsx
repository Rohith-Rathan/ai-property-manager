import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import { ThemeIcon } from './ThemeIcon';
import { MoreActionsButton } from './MoreActionsButton';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export interface TableCell {
  type: 'text' | 'badge' | 'avatar' | 'number' | 'date' | 'currency' | 'actions' | 'moreActions' | 'checkbox';
  value?: any;
  // Badge specific
  variant?: 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary' | 'tertiary' | 'gray' | 'neutral';
  // Avatar specific
  initials?: string;
  // Actions specific
  actions?: Array<{
    id: string;
    label: string;
    icon: string;
    onClick: () => void;
  }>;
  // MoreActions specific
  moreActionsItems?: Array<{
    id: string;
    label: string;
    icon: string;
    onClick: () => void;
    variant?: 'default' | 'danger';
  }>;
  triggerIcon?: string;
  // Checkbox specific
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}

export interface TableRow {
  id: string;
  cells: { [key: string]: TableCell };
  onClick?: () => void;
}

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  title?: string;
  subtitle?: string;
  selectable?: boolean;
  onSelectAll?: (selected: boolean) => void;
  onRowSelect?: (rowId: string, selected: boolean) => void;
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  title,
  subtitle,
  selectable = false,
  onSelectAll,
  onRowSelect,
  className = ''
}) => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(rows.map(row => row.id)));
    } else {
      setSelectedRows(new Set());
    }
    onSelectAll?.(checked);
  };

  const handleRowSelect = (rowId: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
    onRowSelect?.(rowId, checked);
  };

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const renderCell = (cell: TableCell, rowId: string) => {
    switch (cell.type) {
      case 'text':
        return (
          <span className="text-sm text-tertiary">
            {cell.value || ''}
          </span>
        );

      case 'badge':
        return (
          <Chip
            label={cell.value || ''}
            variant={cell.variant || 'neutral'}
            type="low-hue-border"
            size="sm"
          />
        );

      case 'avatar':
        return (
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-aqua-2 flex items-center justify-center rounded-full w-8 h-8">
              <span className="text-sm font-medium text-white">
                {cell.initials || (cell.value || '').charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm text-tertiary">
              {cell.value || ''}
            </span>
          </div>
        );

      case 'number':
        return (
          <span className="text-sm font-medium text-tertiary">
            {cell.value || 0}
          </span>
        );

      case 'currency':
        return (
          <span className="text-sm font-medium text-tertiary">
            ${cell.value || 0}
          </span>
        );

      case 'date':
        return (
          <span className="text-sm text-tertiary">
            {cell.value ? new Date(cell.value).toLocaleDateString() : ''}
          </span>
        );

      case 'checkbox':
        return (
          <input
            type="checkbox"
            checked={cell.checked || selectedRows.has(rowId)}
            onChange={(e) => {
              cell.onCheck?.(e.target.checked);
              handleRowSelect(rowId, e.target.checked);
            }}
            className="w-4 h-4 rounded border border-overlays-gray-30"
          />
        );

      case 'actions':
        return (
          <div className="flex gap-2 items-center">
            {cell.actions?.map((action) => (
              <button
                key={action.id}
                onClick={action.onClick}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-surface-secondary transition-colors"
              >
                <ThemeIcon
                  src={action.icon}
                  alt={action.label}
                  size="sm"
                  variant="gray"
                />
              </button>
            ))}
          </div>
        );

      case 'moreActions':
        return (
          <div className="flex justify-center">
            <MoreActionsButton
              items={cell.moreActionsItems || []}
              triggerIcon={cell.triggerIcon || '/assets/more-options-icon.svg'}
              position="bottom-right"
            />
          </div>
        );

      default:
        return (
          <span className="text-sm text-tertiary">
            {cell.value || ''}
          </span>
        );
    }
  };

  return (
    <Card className={`bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-xxxl shadow-card-large ${className}`}>
      <div className="p-8">
        {/* Table Header */}
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h3 className="text-h4 font-bold text-primary mb-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-tertiary">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-overlays-white-inverse-20">
                {selectable && (
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRows.size === rows.length && rows.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 rounded border border-overlays-gray-30"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-6 py-4 text-sm font-medium text-primary ${
                      column.align === 'center' ? 'text-center' : 
                      column.align === 'right' ? 'text-right' : 'text-left'
                    } ${column.sortable ? 'cursor-pointer hover:bg-surface-secondary' : ''}`}
                    style={{ width: column.width }}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}
                      {column.sortable && sortColumn === column.key && (
                        <ThemeIcon
                          src="/assets/dropdown-arrow-down-icon.svg"
                          alt="Sort"
                          size="xs"
                          variant="gray"
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-overlays-white-inverse-20 hover:bg-surface-secondary transition-colors ${
                    row.onClick ? 'cursor-pointer' : ''
                  }`}
                  onClick={row.onClick}
                >
                  {selectable && (
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(row.id)}
                        onChange={(e) => handleRowSelect(row.id, e.target.checked)}
                        className="w-4 h-4 rounded border border-overlays-gray-30"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-6 py-4 ${
                        column.align === 'center' ? 'text-center' : 
                        column.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {renderCell(row.cells[column.key], row.id)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        {rows.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-tertiary">
              No data available
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Table;
