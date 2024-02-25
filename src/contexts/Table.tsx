import { SetStateAction, createContext, useContext, useState } from "react";

const TableContext = createContext({});

function TableDataProvider({ children }: { children: React.ReactNode }) {
	const [isChecked, setIsChecked] = useState(false);
	const [activeRowData, setActiveRowData] = useState<Record<
		string,
		string
	> | null>(null);

	const toggleSelect = () => setIsChecked((checked) => !checked);

	const selectRowData = (
		rowData: SetStateAction<Record<string, string> | null>
	) => setActiveRowData(rowData);

	return (
		<TableContext.Provider
			value={{ isChecked, toggleSelect, activeRowData, selectRowData }}
		>
			{children}
		</TableContext.Provider>
	);
}

export default TableDataProvider;

// eslint-disable-next-line react-refresh/only-export-components
export function useTableData() {
	return useContext(TableContext);
}
