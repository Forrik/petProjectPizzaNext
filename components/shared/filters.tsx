import React from 'react'
import { cn } from '@/lib/utils'
import { Title } from './title'
import { FilterCheckbox } from './index'
import { Input } from '../ui/input'
import { RangeSlider } from './range-slider'


interface Props {
    className ?: string
}

const Ingredients = [
    "Сырный соус",
    "Моцарелла",
    "Помидоры",
    "Острые колбаски",
    "Чеснок",
    "Пикантная пепперони",]

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={ className} >
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
        
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 ">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                <Input type="number" placeholder="0" min={0} max={1000}  />
                <Input type="number" placeholder="1000" min={0} max={1000}   />
                </div>
                <RangeSlider min={0} max={1000} step={1} value={[0, 1000]} />
            </div>

            <div className="mt-5 ">
                <p className='font-bold mb-5'>Ингредиенты:</p>
                <div className="flex flex-col gap-4">
                    {Ingredients.map((ingredient, index) => (
                        <FilterCheckbox key={index} text={ingredient} value={String(index)} />
                    ))}
                </div>
            </div>

        </div>
    )
}