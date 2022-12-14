import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: "amount-" + id,
          type: "number",
          min: "1",
          max: "15",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
