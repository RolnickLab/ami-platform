import pandas as pd

df = pd.read_csv("/Users/vanessa/dev/mila/ami-platform/categories.csv")
df = df.drop(columns=["Unnamed: 0"])

# print(df.shape)

# split into separate csv, only use context and category and filename
idx = int(df.shape[0] / 2)
df1 = df.iloc[:idx]
df2 = df.iloc[idx:]

df1.to_csv("/Users/vanessa/dev/mila/ami-platform/make_index_1.csv")
df2.to_csv("/Users/vanessa/dev/mila/ami-platform/make_index_2.csv")

# Group the ones that appear to refer to the same todo
