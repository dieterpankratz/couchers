"""Tweak communities

Revision ID: ae9221def41f
Revises: c0479c00a078
Create Date: 2021-01-10 22:28:44.978611

"""
import geoalchemy2
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "ae9221def41f"
down_revision = "c0479c00a078"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column("clusters", "official_cluster_for_node_id", existing_type=sa.BIGINT(), nullable=True)
    op.alter_column("page_versions", "address", existing_type=sa.VARCHAR(), nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column("page_versions", "address", existing_type=sa.VARCHAR(), nullable=False)
    op.alter_column("clusters", "official_cluster_for_node_id", existing_type=sa.BIGINT(), nullable=False)
    # ### end Alembic commands ###
