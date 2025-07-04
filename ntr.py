import pandas as pd

# Sample data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [24, 27, 22, 32],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
}

# Create DataFrame
df = pd.DataFrame(data)

# Display the data
print("Sample Data:")
print(df)

# Process the data: Calculate the average age
average_age = df['Age'].mean()
print("\nAverage Age:", average_age)