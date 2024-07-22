import "./IngredientsList.scss";

interface IngredientsListProps {
  measurement: string;
  ingredient: string;
}

const IngredientsList: React.FunctionComponent<IngredientsListProps> = ({
  measurement,
  ingredient,
}) => {
  return (
    <div>
      {measurement && ingredient !== "" && (
        <div className="ingContainer">
          <svg
            width="25"
            height="25"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 7.5C24.0426 7.4999 24.3259 7.60243 24.5506 7.78972C24.7754 7.97702 24.9273 8.23721 24.98 8.525L25 8.75V16.25C25.0003 17.6908 24.5028 19.0875 23.5916 20.2036C22.6805 21.3198 21.4117 22.0868 20 22.375V41.25C20.0006 41.5624 19.8842 41.8636 19.6737 42.0945C19.4633 42.3253 19.174 42.469 18.8629 42.4972C18.5519 42.5254 18.2415 42.4361 17.9929 42.247C17.7444 42.0578 17.5757 41.7824 17.52 41.475L17.5 41.25V22.375C16.1604 22.101 14.9476 21.3955 14.0472 20.3665C13.1469 19.3374 12.6086 18.0416 12.515 16.6775L12.5 16.25V8.75C12.4994 8.43764 12.6158 8.13637 12.8263 7.90554C13.0367 7.67471 13.326 7.53104 13.6371 7.50281C13.9481 7.47459 14.2585 7.56386 14.5071 7.75305C14.7556 7.94224 14.9244 8.21763 14.98 8.525L15 8.75V16.25C14.9996 17.0258 15.2398 17.7827 15.6876 18.4162C16.1353 19.0498 16.7686 19.5289 17.5 19.7875V8.75C17.4994 8.43764 17.6158 8.13637 17.8263 7.90554C18.0367 7.67471 18.326 7.53104 18.6371 7.50281C18.9481 7.47459 19.2585 7.56386 19.5071 7.75305C19.7556 7.94224 19.9244 8.21763 19.98 8.525L20 8.75V19.785C21.345 19.31 22.3375 18.09 22.4825 16.6225L22.5 16.25V8.75C22.5 8.41848 22.6317 8.10054 22.8661 7.86612C23.1005 7.6317 23.4185 7.5 23.75 7.5ZM36.25 7.5C36.5426 7.4999 36.8259 7.60243 37.0506 7.78972C37.2754 7.97702 37.4273 8.23721 37.48 8.525L37.5 8.75V41.25C37.5006 41.5624 37.3842 41.8636 37.1737 42.0945C36.9633 42.3253 36.674 42.469 36.3629 42.4972C36.0519 42.5254 35.7415 42.4361 35.4929 42.247C35.2444 42.0578 35.0757 41.7824 35.02 41.475L35 41.25V27.5H31.25C30.9574 27.5001 30.6741 27.3976 30.4494 27.2103C30.2246 27.023 30.0727 26.7628 30.02 26.475L30 26.25V13.75C30 12.0924 30.6585 10.5027 31.8306 9.33058C33.0027 8.15848 34.5924 7.5 36.25 7.5ZM35 25V10.2125C33.655 10.6875 32.6625 11.9075 32.5175 13.3775L32.5 13.75V25H35V10.2125V25Z"
              fill="black"
            />
          </svg>
          <p>
            {ingredient} - {measurement}
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientsList;
