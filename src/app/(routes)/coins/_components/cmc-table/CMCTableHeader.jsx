const styles = {
  textIcon: `flex items-center`,
};

const CMCTableHeader = () => {
  return (
    <tbody>
      <tr className="text-left">
        <th></th>
        <th className="flex items-center">
          <b># </b>
        </th>
        <th>
          <span>Name</span>
        </th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <p className="mx-3">Market Cap</p>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Volume(24h)</p>
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Circulating Supply</p>
          </div>
        </th>
        <th>Last 7 days</th>
      </tr>
    </tbody>
  );
};
export const MobileTableHeader = () => {
  return (
    <tbody className="table-auto">
      <tr>
        <th className="text-start">
          <b># </b>
        </th>
        <th className="text-start">
          <span>Name</span>
        </th>
        <th className="text-end">{`Price/24h`}</th>
      </tr>
    </tbody>
  );
};

export default CMCTableHeader;
