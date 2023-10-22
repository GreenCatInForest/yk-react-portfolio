export const RatingForm = () => {
  return (
    <div>
      <form>
        <label for="star5">☆</label>
        <input id="star5" name="star" type="radio" value="5" />
        <label for="star4">☆</label>
        <input id="star4" name="star" type="radio" value="4" />
        <label for="star3">☆</label>
        <input id="star3" name="star" type="radio" value="3" />
        <label for="star2">☆</label>
        <input id="star2" name="star" type="radio" value="2" />
        <label for="star1">☆</label>
        <input id="star1" name="star" type="radio" value="1" />
        <div class="clear"></div>
        <label for="feedbackRating"></label>
        <button type="submit">Rate Now</button>
      </form>
    </div>
  );
};
