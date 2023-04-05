from pydantic import BaseModel


class ItemCreate(BaseModel):
    value: str
    name: str


class ItemUpdate(ItemCreate):
    pass


class Item(ItemCreate):
    id: int

    class Config:
        orm_mode = True
