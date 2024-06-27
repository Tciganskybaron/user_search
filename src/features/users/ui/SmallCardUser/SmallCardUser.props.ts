export interface SmallCardUserProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  name: string;
  mail: string;
  selected: boolean;
}
