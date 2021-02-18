import breakpointsMedia from "./breakpointsMedia";

export default function propToStyle(propName) {
  return (props) => {
    if (typeof props[propName] === "string")
      return {
        [propName]: props[propName],
      };
    if (typeof props[propName] === "object") {
      return breakpointsMedia({
        xs: { [propName]: props[propName].xs },
        sm: { [propName]: props[propName].sm },
        md: { [propName]: props[propName].md },
        lg: { [propName]: props[propName].lg },
        xl: { [propName]: props[propName].xl },
      });
    }
  };
}
