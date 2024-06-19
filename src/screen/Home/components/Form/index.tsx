import axios from "axios";
import { ActionButton } from "../../../../components/Buttons/ActionButton";
import * as Styles from "./styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = () => {

  const schema = z.object({
    name: z.string().min(1, 'Campo obrigatório'),
    comment: z.string().min(1, 'Campo obrigatório').max(255, "Não é possivel enviar mais que 255 caracter"),
    supports_idea: z.string().min(1, 'Campo obrigatório'),
    recyclable_shelters: z.string().min(1, 'Campo obrigatório'),
    public_management: z.string().min(1, 'Campo obrigatório'),
    adopted_from_shelter: z.string().min(1, 'Campo obrigatório'),
    local_shelter: z.string().min(1, 'Campo obrigatório'),
    urban_shelter_necessity: z.string().min(1, 'Campo obrigatório'),
  })

  type TFormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
    defaultValues:{
      adopted_from_shelter: '',
      comment:'',
      local_shelter:'',
      name:'',
      public_management:'',
      recyclable_shelters:'',
      supports_idea:'',
      urban_shelter_necessity:'',
    }
  })

  const createInfo = async(data: TFormData) => {    
    await axios.post('https://189.8.209.240:9011/forms',{
      adopted_from_shelter: data.adopted_from_shelter === 'true',
      comment: data.comment,
      local_shelter: data.local_shelter === 'true',
      name: data.name,
      public_management: data.public_management === 'true',
      recyclable_shelters: data.recyclable_shelters === 'true',
      supports_idea: data.supports_idea === 'true',
      urban_shelter_necessity: data.urban_shelter_necessity === 'true'
    }).then(() => {
      alert('Enviada com sucesso')
    }).catch(() => {
      alert('Erro ao processar os dados')
    })
  }

  return (
    <Styles.Container>
      <Styles.FormContainer>
        <h2>Por favor, Ajude Respondendo a Este Formulário</h2>
        <Styles.Form onSubmit={handleSubmit(createInfo)}>
          <Styles.FieldContainer>
            <Styles.RadioLabel htmlFor="name"><p className="p1">Seu nome:</p></Styles.RadioLabel>
            <input type="text" placeholder="Seu nome..." {...register('name')} id="name"/>
            {errors.name && <p className="error">{errors.name.message}</p>}
          </Styles.FieldContainer>
          <Styles.FieldContainer>
          <Styles.RadioLabel htmlFor="comment"><p className="p1">Deixe uma comentário:</p></Styles.RadioLabel>
            <textarea placeholder="Escreva uma comentário..." maxLength={255} {...register('comment')}/>
            {errors.comment && <p className="error">{errors.comment.message}</p>}
          </Styles.FieldContainer>
          <div>
            <p className="p1">Você já adotou um animal de um abrigo?</p>
            <Styles.RadioContainer>
              <Styles.RadioLabel htmlFor="adopted_from_shelter_true">Sim:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('adopted_from_shelter')} value='true' id="adopted_from_shelter_true"/>
              <Styles.RadioLabel htmlFor="adopted_from_shelter_false">Não:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('adopted_from_shelter')} value='false'  id="adopted_from_shelter_false"/>
            </Styles.RadioContainer>
            {errors.adopted_from_shelter && <p className="error">{errors.adopted_from_shelter?.message}</p>}
          </div>
          <div>
            <p className="p1">Você concorda que entidades publicas deveriam gerenciar os abrigos?</p>
            <Styles.RadioContainer>
              <Styles.RadioLabel htmlFor="public_management_true">Sim:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('public_management')} value='true' id="public_management_true"/>
              <Styles.RadioLabel htmlFor="public_management_false">Não:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('public_management')} value='false'  id="public_management_false"/>
            </Styles.RadioContainer>

            {errors.public_management && <p className="error">{errors.public_management?.message}</p>}
          </div>
          <div>
            <p className="p1">Você conhece algum abrigo para animais de rua na sua área local?</p>
            <Styles.RadioContainer>
              <Styles.RadioLabel htmlFor="local_shelter_true">Sim:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('local_shelter')} value='true' id="local_shelter_true"/>
              <Styles.RadioLabel htmlFor="alocal_shelter_false">Não:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('local_shelter')} value='false'  id="alocal_shelter_false"/>
            </Styles.RadioContainer>
            {errors.local_shelter && <p className="error">{errors.local_shelter?.message}</p>}
          </div>
          <div>
            <p className="p1">Você concorda que as casinhas deveriam ser feitas com materiais recicláveis?</p>
            <Styles.RadioContainer>
              <Styles.RadioLabel htmlFor="recyclable_shelters_true">Sim:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('recyclable_shelters')} value='true' id="lrecyclable_shelters_true"/>
              <Styles.RadioLabel htmlFor="recyclable_shelters_false">Não:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('recyclable_shelters')} value='false'  id="recyclable_shelters_false"/>
            </Styles.RadioContainer>
            {errors.recyclable_shelters && <p className="error">{errors.recyclable_shelters?.message}</p>}
          </div>
          <div>
            <p className="p1">Você acredita que é necessário construir abrigos para animais de rua em áreas urbanas?</p>
            <Styles.RadioContainer>
              <Styles.RadioLabel htmlFor="urban_shelter_necessity_true">Sim:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('urban_shelter_necessity')} value='true' id="urban_shelter_necessity_true"/>
              <Styles.RadioLabel htmlFor="urban_shelter_necessity_false">Não:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('urban_shelter_necessity')} value='false'  id="urban_shelter_necessity_false"/>
            </Styles.RadioContainer>
            {errors.urban_shelter_necessity && <p className="error">{errors.urban_shelter_necessity?.message}</p>}
          </div>

          <div>
            <p className="p1">Você concorda com a ideia do projeto?</p>
            <Styles.RadioContainer>
              <Styles.RadioLabel htmlFor="supports_idea_true">Sim:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('supports_idea')} value='true' id="supports_idea_true"/>
              <Styles.RadioLabel htmlFor="supports_idea_false">Não:</Styles.RadioLabel>
              <Styles.RadioStyled type="radio" {...register('supports_idea')} value='false'  id="supports_idea_false"/>
            </Styles.RadioContainer>
            {errors.supports_idea && <p className="error">{errors.supports_idea?.message}</p>}
          </div>

          <ActionButton label="Enviar resposta" height="66px" width="100%" />
        </Styles.Form>
      </Styles.FormContainer>
    </Styles.Container>
  );
};
