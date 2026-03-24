function ReflectionDailyPanel({ journalEntry, feelings }) {
  return (
    <div>
      <p>Relfection of the day</p>

      <p>{journalEntry}</p>

      <div>
        {feelings.map((feeling) => (
          <span key={feeling}>#{feeling}</span>
        ))}
      </div>
    </div>
  );
}

export default ReflectionDailyPanel;
