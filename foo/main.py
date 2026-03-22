import open3d as o3d
import open3d.visualization.rendering as rendering


def main():

    material = rendering.MaterialRecord()
    material.shader = 'defaultUnlit'
    material.albedo_img = o3d.io.read_image('uv1.png')

    cube = o3d.geometry.TriangleMesh.create_box(create_uv_map=True)
    cube.compute_vertex_normals()
    o3d.visualization.draw({'name': 'box', 'geometry': cube, 'material': material})


if __name__ == "__main__":
    main()
