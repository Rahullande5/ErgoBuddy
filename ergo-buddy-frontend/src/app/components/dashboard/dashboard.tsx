"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from '../../ergoBuddyCss/Dashboard.module.css'; // Import the CSS module

// Define the type for each table row
interface TableRow {
  serialNo: number;
  ergoType: string;
  ergoDescription: string;
  ergoFrequency: string;
}

// Initialize sample data
const initialTableData: TableRow[] = Array.from({ length: 20 }, (_, index) => ({
  serialNo: index + 1,
  ergoType: `ErgoType ${index + 1}`,
  ergoDescription: `Description for ErgoType ${index + 1}`,
  ergoFrequency: `${Math.floor(Math.random() * 10) + 1} times/week`,
}));

const DashboardComponent: React.FC = (props) => {
  const router = useRouter();
  const [isTextboxesEnabled, setIsTextboxesEnabled] = useState<boolean>(false); // Type-safe state for toggle
  const [tableData, setTableData] = useState<TableRow[]>(initialTableData); // Type-safe state for table data

  const handleSliderChange = () => {
    setIsTextboxesEnabled((prevState) => !prevState); // Toggle the textboxes' enabled/disabled state
  };

  const handleInputChange = (index: number, field: keyof TableRow, value: string) => {
    const updatedTableData = [...tableData];
      // Check the field type and parse the value if necessary
      if (field === 'serialNo') {
        updatedTableData[index][field] = Number(value) as any; // Convert string to number
      } else {
        updatedTableData[index][field] = value as any; // Assign the value directly for other fields
      }
    setTableData(updatedTableData); // Update the state with the new value
  };

  const handleDeleteRow = (index: number) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData); // Update the state to remove the selected row
  };

  return (
    <>
      {/* Include Header at the top */}
      <Header />

      {/* Main Content for Dashboard */}
      <div className={styles.container}>
        <h2 className={styles.title}>Activity Dashboard</h2>
         {JSON.stringify(props)}
        <p className={styles.description}>
          You can manage your activities, monitor your ergonomic performance, and access various features to enhance your workplace experience.
        </p>
        <br />
        {/* Custom Toggle Switch */}
        <div className={styles.switchContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isTextboxesEnabled}
              onChange={handleSliderChange}
            />
            <span className={styles.slider}></span>
          </label>
          <span className={styles.switchLabel}>Customize Your Activities</span>
        </div>

        {/* Update Activities Button */}
        <button
          className={styles.updateButton}
          disabled={!isTextboxesEnabled} // Button is enabled only when the slider is active
        >
          Update Activities
        </button>

        {/* Table displaying the data */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Serial No</th>
                <th>ErgoType</th>
                <th>ErgoDescription</th>
                <th>ErgoFrequency</th>
                <th>Action</th> {/* New column for the Delete button */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={item.serialNo}>
                  <td>
                    <input
                      type="text"
                      value={item.serialNo}
                      disabled={!isTextboxesEnabled}
                      onChange={(e) => handleInputChange(index, 'serialNo', e.target.value)}
                      className={styles.input}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.ergoType}
                      disabled={!isTextboxesEnabled}
                      onChange={(e) => handleInputChange(index, 'ergoType', e.target.value)}
                      className={styles.input}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.ergoDescription}
                      disabled={!isTextboxesEnabled}
                      onChange={(e) => handleInputChange(index, 'ergoDescription', e.target.value)}
                      className={styles.input}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.ergoFrequency}
                      disabled={!isTextboxesEnabled}
                      onChange={(e) => handleInputChange(index, 'ergoFrequency', e.target.value)}
                      className={styles.input}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteRow(index)}
                      className={styles.deleteButton} // Optional: style the delete button
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Include Footer at the bottom */}
      <Footer />
    </>
  );
};

export default DashboardComponent;
