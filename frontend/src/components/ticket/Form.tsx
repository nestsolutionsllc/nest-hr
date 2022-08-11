import { TextField, Typography } from "@mui/material";
import FormController from "./FormController";

const styles = {
  fieldGap: {
    margin: "0.5em",
  },
};
export type Input = {
  tag: string;
  label?: string;
  minRows?: number;
  multiline?: boolean;
  data?:
    | {
        status: string[];
        priority: string[];
      }
    | {
        reason: string[];
        time: string[];
      };
};

type Props = {
  inputs: Input[];
  callback: (key: string, value: string) => void; // eslint-disable-line no-unused-vars
};

export const Form = ({ inputs, callback }: Props) => {
  return (
    <>
      {inputs.map((el, index) =>
        (() => {
          switch (el.tag) {
            case "textfield":
              return (
                <TextField
                  key={Math.random() * index}
                  onChange={e => callback(el.label, e.target.value)}
                  sx={styles.fieldGap}
                  label={el.label}
                  minRows={el.minRows || null}
                  multiline={el.multiline || false}
                />
              );
            case "typography":
              return (
                <Typography key={Math.random() * index} sx={styles.fieldGap}>
                  {el.label}
                </Typography>
              );
            default:
              return Object.keys(el.data).map(e => {
                if (e === "type") return null;
                return (
                  <FormController
                    getType={null}
                    key={Math.random() * index}
                    handleFormValuesChange={callback}
                    title={e}
                    selectList={el.data[e]}
                  />
                );
              });
          }
        })()
      )}
    </>
  );
};
