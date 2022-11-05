
const InfoCard = ({ title, value, isAchieved }) => {

  return (
    <div className="info-card"  data-cy="info_card">
      <div className="info-card-title">
        {title}
        <span data-cy="info_card_value" className={`info-card-value-${isAchieved?"infocomplete":"infouncomplete"}`}>{value}</span>
      </div>
    </div>
  );
};
export default InfoCard;
