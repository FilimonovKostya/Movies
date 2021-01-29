import React, {ChangeEvent} from "react";

type TitleFieldPropsType = {
    isLoading: boolean
    inputValue: string
    onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandler: () => void
}
export const InputField = (props: TitleFieldPropsType) => {
    return <input type="text" placeholder="Title"
                  disabled={props.isLoading}
                  value={props.inputValue}
                  className="search"
                  onChange={props.onChangeInputValue}
                  onKeyPress={(event => {
                      if (event.key === 'Enter') props.onClickHandler()
                  })}/>

}