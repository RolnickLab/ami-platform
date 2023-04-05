"""add_initial_deployment

Revision ID: c9db9afd1258
Revises: 39c525110e44
Create Date: 2023-04-05 02:20:53.794964

"""
from alembic import op
import sqlalchemy as sa
import fastapi_users_db_sqlalchemy


# revision identifiers, used by Alembic.
revision = 'c9db9afd1258'
down_revision = '39c525110e44'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('deployments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('occurrences', sa.Column('deployment_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'occurrences', 'deployments', ['deployment_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'occurrences', type_='foreignkey')
    op.drop_column('occurrences', 'deployment_id')
    op.drop_table('deployments')
    # ### end Alembic commands ###
