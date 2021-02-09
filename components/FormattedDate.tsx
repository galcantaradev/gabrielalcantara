import { parseISO, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

interface Props {
  value: string;
}

export const FormattedDate = (props: Props) => {
  return (
    <>
      {format(parseISO(props.value), 'dd/MM/yyyy', {
        locale: ptBr
      })}
    </>
  );
};
