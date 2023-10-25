export const RatingForm = () => {
  return (
    <div>
      <h3>Rate my portfolio:</h3>
      <form>
        <label htmlFor="star5">☆</label>
        <input id="star5" name="star" type="radio" value="5" />
        <label htmlFor="star4">☆</label>
        <input id="star4" name="star" type="radio" value="4" />
        <label htmlFor="star3">☆</label>
        <input id="star3" name="star" type="radio" value="3" />
        <label htmlFor="star2">☆</label>
        <input id="star2" name="star" type="radio" value="2" />
        <label htmlFor="star1">☆</label>
        <input id="star1" name="star" type="radio" value="1" />
        <div className="clear"></div>
        <label htmlFor="feedbackRating"></label>
        <button type="submit" className="btn-orange">
          Rate Now
        </button>
      </form>
    </div>
  );
};
