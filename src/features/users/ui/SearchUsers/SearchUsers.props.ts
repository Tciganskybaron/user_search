export interface SearchUsersProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onSerchUsers: (value: string) => void;
}
